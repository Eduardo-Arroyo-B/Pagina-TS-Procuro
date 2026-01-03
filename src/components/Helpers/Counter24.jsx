import { useEffect, useState } from "react"

const TOTAL_SECONDS = 24 * 60 * 60 // 24 horas

export default function Countdown24h() {
    const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)

    useEffect(() => {
        const start = Date.now()

        const interval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - start) / 1000)
            const remaining = TOTAL_SECONDS - elapsed

            if (remaining <= 0) {
                setSecondsLeft(0)
                clearInterval(interval)
            } else {
                setSecondsLeft(remaining)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const hours = Math.floor(secondsLeft / 3600)
    const minutes = Math.floor((secondsLeft % 3600) / 60)
    const seconds = secondsLeft % 60

    const pad = (n) => String(n).padStart(2, "0")

    return (
        <div className="flex gap-3 items-center text-white">
            <TimerBox label="Horas" value={pad(hours)} />
            <span className="text-2xl font-bold">:</span>
            <TimerBox label="Min" value={pad(minutes)} />
            <span className="text-2xl font-bold">:</span>
            <TimerBox label="Seg" value={pad(seconds)} />
        </div>
    )
}

function TimerBox({ label, value }) {
    return (
        <div className="flex flex-col items-center bg-[#0B1E3A] rounded-xl px-3 py-2 min-w-[64px]">
            <div className="text-2xl font-extrabold">{value}</div>
            <div className="text-[10px] uppercase opacity-80">{label}</div>
        </div>
    )
}
