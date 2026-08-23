export function AnimatedBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-blob animation-delay-4000" />
    </div>
  )
}
