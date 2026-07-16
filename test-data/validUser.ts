// Load environment variables only when running in Node (tests/fixtures).
let env: NodeJS.ProcessEnv = {};
if (typeof process !== 'undefined') {
  try {
    // Conditionally load dotenv in Node environments where it's available.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config();
  } catch (_) {
    // ignore if dotenv isn't installed or require fails
  }
  env = process.env;
}

export const validUser = {
  username: env.TEST_USER ?? 'fallbackUser',
  password: env.TEST_PASS ?? 'fallbackPass',
};