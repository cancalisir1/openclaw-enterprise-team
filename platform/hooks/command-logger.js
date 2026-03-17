/**
 * command-logger.js
 * OpenClaw Hook: Logs all commands executed inside the sandbox or host to the 
 * agent's specific memory file. It ensures tracing and auditing.
 */

export function onCommandExe(context, command) {
  const agentId = context.agent.id;
  const timestamp = new Date().toISOString();
  
  // Basic auditing output
  console.log(`[AUDIT] [${timestamp}] Agent '${agentId}' executed: ${command}`);
  
  // Custom logic to append to agent's .learnings or general log
  // appendToLog(agentId, `[${timestamp}] Executed: ${command}`);
}
