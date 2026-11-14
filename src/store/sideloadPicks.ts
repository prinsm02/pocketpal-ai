// First-run GGUF picks for a 4 GB iPhone (Llama 3.2 1B and Gemma 3 1B, Q4_K_M).
// Kept beside the device-rule presets so a newer rules download cannot drop them.
// Sizes are the Hugging Face file sizes checked on 14 November 2026. Nothing
// here is a secret: both repos are public and the files download in the app.

export interface SideloadPick {
  displayName: string;
  repo: string;
  filename: string;
  sizeBytes: number;
  params: number;
}

export const SIDELOAD_PICKS: readonly SideloadPick[] = [
  {
    displayName: 'Llama 3.2 1B Q4_K_M',
    repo: 'bartowski/Llama-3.2-1B-Instruct-GGUF',
    filename: 'Llama-3.2-1B-Instruct-Q4_K_M.gguf',
    sizeBytes: 807694464,
    params: 1235814400,
  },
  {
    displayName: 'Gemma 3 1B Q4_K_M',
    repo: 'ggml-org/gemma-3-1b-it-GGUF',
    filename: 'gemma-3-1b-it-Q4_K_M.gguf',
    sizeBytes: 806058240,
    params: 999885952,
  },
];
