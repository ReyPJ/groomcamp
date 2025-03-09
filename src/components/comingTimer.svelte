<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let intervalId: ReturnType<typeof setInterval> | undefined;

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(intervalId);
      days = hours = minutes = seconds = 0;
    }
  }

  onMount(() => {
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });

  const format = (num: number) => num.toString().padStart(2, "0");
</script>

<div class="w-full">
  <div class="flex items-center justify-center gap-1 sm:gap-2 text-black">
    <div class="flex flex-col items-center bg-white/90 p-1">
      <span
        class="text-2xl sm:text-3xl md:text-4xl font-bold min-w-[2rem] sm:min-w-[3rem] text-center"
        >{days}</span
      >
      <span class="text-xs sm:text-sm uppercase opacity-80">Dias</span>
    </div>
    <div class="text-2xl sm:text-3xl md:text-4xl font-bold -mt-1 sm:-mt-2">
      :
    </div>
    <div class="flex flex-col items-center bg-white/90 p-1">
      <span
        class="text-2xl sm:text-3xl md:text-4xl font-bold min-w-[2rem] sm:min-w-[3rem] text-center"
        >{format(hours)}</span
      >
      <span class="text-xs sm:text-sm uppercase opacity-80">Horas</span>
    </div>
    <div class="text-2xl sm:text-3xl md:text-4xl font-bold -mt-1 sm:-mt-2">
      :
    </div>
    <div class="flex flex-col items-center bg-white/90 p-1">
      <span
        class="text-2xl sm:text-3xl md:text-4xl font-bold min-w-[2rem] sm:min-w-[3rem] text-center"
        >{format(minutes)}</span
      >
      <span class="text-xs sm:text-sm uppercase opacity-80">Minutos</span>
    </div>
    <div class="text-2xl sm:text-3xl md:text-4xl font-bold -mt-1 sm:-mt-2">
      :
    </div>
    <div class="flex flex-col items-center bg-white/90 p-1">
      <span
        class="text-2xl sm:text-3xl md:text-4xl font-bold min-w-[2rem] sm:min-w-[3rem] text-center"
        >{format(seconds)}</span
      >
      <span class="text-xs sm:text-sm uppercase opacity-80">Segundos</span>
    </div>
  </div>
</div>
