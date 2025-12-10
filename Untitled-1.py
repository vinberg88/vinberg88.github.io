"""Build Agent using Microsoft Agent Framework in Python
# Run this python script
> pip install agent-framework --pre
> python <this-script-path>.py
"""

import asyncio
import os

from agent_framework import ChatAgent
from agent_framework.openai import OpenAIChatClient
from openai import AsyncOpenAI

# To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings.
# Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
openaiClient = AsyncOpenAI(
    base_url = "https://models.github.ai/inference",
    api_key = os.environ["GITHUB_TOKEN"],
    default_query = {
        "api-version": "2024-08-01-preview",
    },
)

AGENT_NAME = "ai-agent"
AGENT_INSTRUCTIONS = "You are a helpful AI assistant."

# User inputs for the conversation
USER_INPUTS = [
    "INSERT_INPUT_HERE",
]


async def main() -> None:
    async with (
        ChatAgent(
            chat_client=OpenAIChatClient(
                async_client=openaiClient,
                model_id="openai/gpt-4.1-mini"
            ),
            instructions=AGENT_INSTRUCTIONS,
            temperature=1,
            top_p=1,
            tools=None,
        ) as agent
    ):
        # Create a new thread that will be reused
        thread = agent.get_new_thread()

        # Process user messages
        for user_input in USER_INPUTS:
            print(f"\n# User: '{user_input}'")
            async for chunk in agent.run_stream([user_input], thread=thread):
                if chunk.text:
                    print(chunk.text, end="")
                elif (
                    # log tool calls if any
                    chunk.raw_representation
                    and chunk.raw_representation.raw_representation
                    and hasattr(chunk.raw_representation.raw_representation, "choices")
                    and chunk.raw_representation.raw_representation.choices is not None
                    and len(chunk.raw_representation.raw_representation.choices) > 0
                    and hasattr(chunk.raw_representation.raw_representation.choices[0], "delta")
                    and hasattr(chunk.raw_representation.raw_representation.choices[0].delta, "tool_calls")
                    and chunk.raw_representation.raw_representation.choices[0].delta.tool_calls is not None
                    and len(chunk.raw_representation.raw_representation.choices[0].delta.tool_calls) > 0
                ):
                    toolCalls = list(filter(lambda call: call.function.name != None, chunk.raw_representation.raw_representation.choices[0].delta.tool_calls))
                    if len(toolCalls) > 0:
                        print("")
                        print("Tool calls:", list(map(lambda call: call.function.name, toolCalls)))
            print("")
        
        print("\n--- All tasks completed successfully ---")

    # Give additional time for all async cleanup to complete
    await asyncio.sleep(1.0)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nProgram interrupted by user")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        import traceback
        traceback.print_exc()
    finally:
        print("Program finished.")
