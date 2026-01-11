import { useEffect, useState, useRef } from "react";
import { Users, Heart, Shield, Award } from "lucide-react";

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

            setCount(Math.floor(easeOutQuart(progress) * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return { count, countRef };
};

interface StatItemProps {
    icon: React.ElementType;
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
}

const StatItem = ({ icon: Icon, value, label, suffix = "+", delay = 0 }: StatItemProps) => {
    const { count, countRef } = useCountUp(value, 2500);

    return (
        <div
            ref={countRef}
            className="medical-card-highlight p-8 text-center bg-white/50 backdrop-blur-sm border-2 border-primary/10 hover-lift group"
        >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-gradient-medical mb-2 tabular-nums">
                {count}{suffix}
            </h3>
            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">{label}</p>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { icon: Users, value: 6, label: "Doctors", suffix: "" },
        { icon: Heart, value: 1850, label: "Happy Customers" },
        { icon: Shield, value: 48, label: "Years of Experience" },
        { icon: Award, value: 10, label: "Awards Won" },
    ];

    return (
        <section className="py-12 -mt-10 relative z-10">
            <div className="container-medical">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            {...stat}
                            delay={index * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
