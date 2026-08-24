const PROJECT = "glint-pomodoro-bell-nook";
const PROFILE = "0009";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
