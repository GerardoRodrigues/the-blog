import { logColor } from "./log-color";

export async function asyncDelay(millisecond: number = 0, verbose = false) {
  if (millisecond <= 0) return;
  if (verbose) logColor(`Delay ${millisecond/1000} seconds`);
  
  await new Promise((resolve) => setTimeout(resolve, millisecond));
}
