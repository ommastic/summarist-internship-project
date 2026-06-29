export function formatTime(seconds: number){
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}



export function formatTimeMins(seconds: number){
   const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins.toString()}mins ${secs.toString().padStart(2, "0")}secs `
}


