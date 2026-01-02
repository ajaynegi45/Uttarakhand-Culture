import {motion} from "framer-motion";

type DistrictTehsilMapProps = { districtName: string; tehsilCount: number; };

export default function DistrictTehsilMap({ districtName, tehsilCount }: DistrictTehsilMapProps) {
    return (
        <div className="relative w-full aspect-square bg-emerald-50/50 rounded-full border-4 border-white shadow-inner flex items-center justify-center overflow-hidden p-8">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"/>

            {/* Stylized "Tehsil" nodes */}
            <div className="relative w-full h-full">
                {[...Array(tehsilCount)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: i * 0.2}}
                        className="absolute w-12 h-12 sm:w-16 sm:h-16  bg-white rounded-full shadow-md flex items-center justify-center text-[10px] font-bold text-center p-2 border border-emerald-100"
                        style={{
                            top: `${20 + randomNumber() * 60}%`,
                            left: `${20 + randomNumber()* 60}%`
                        }}
                    >
                        Tehsil {i + 1}
                    </motion.div>
                ))}


                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h3 className="text-4xl font-hand font-bold text-primary/20 uppercase tracking-widest">{districtName}</h3>
                </div>
            </div>
        </div>
    );
}

const randomNumber = () => Math.random();