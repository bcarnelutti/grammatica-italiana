import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowUp, ArrowDown, ArrowRight, ArrowLeft, Home, Sun, CloudRain, Skull, Baby, LogIn, LogOut, DoorOpen } from 'lucide-react';

const CasaDiEssereChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-6 text-gray-800 underline decoration-indigo-500 underline-offset-8">
          {t('verbs.casaDiEssereTitle')}
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            {t('verbs.casaDiEssereDesc')}
        </p>

        {/* THE HOUSE VISUALIZATION */}
        <div className="relative max-w-3xl mx-auto min-h-[600px] p-4">
            
            {/* ROOF */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-b-[200px] border-b-amber-100 z-0"></div>
            
            {/* ROOF CONTENT */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-16 z-10 text-amber-900">
                <div className="flex flex-col items-center">
                    <Sun size={32} className="text-orange-400 mb-1" />
                    <span className="font-bold">Nascere</span>
                    <span className="text-xs opacity-70">(nato)</span>
                </div>
                <div className="flex flex-col items-center">
                    <ArrowUp size={32} className="text-indigo-600 mb-1" />
                    <span className="font-bold">Salire</span>
                    <span className="text-xs opacity-70">(salito)</span>
                </div>
            </div>

            {/* MAIN FLOOR */}
            <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-slate-50 border-4 border-slate-300 z-10 flex flex-col justify-between p-4 shadow-inner">
                
                {/* UPSTAIRS AREA */}
                <div className="flex justify-between items-start px-8">
                    <div className="flex flex-col items-center">
                        <ArrowLeft size={24} className="text-emerald-600 mb-1" />
                        <span className="font-bold text-slate-800">Rimanere</span>
                        <span className="text-xs text-slate-500">(rimasto)</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Home size={24} className="text-indigo-600 mb-1" />
                        <span className="font-bold text-slate-800">Stare</span>
                        <span className="text-xs text-slate-500">(stato)</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <ArrowRight size={24} className="text-emerald-600 mb-1" />
                        <span className="font-bold text-slate-800">Restare</span>
                        <span className="text-xs text-slate-500">(restato)</span>
                    </div>
                </div>

                {/* DOORS AREA */}
                <div className="flex justify-between items-center px-4 mt-8">
                    <div className="flex flex-col items-center">
                        <LogIn size={32} className="text-green-600 mb-1" />
                        <span className="font-bold text-slate-800">Entrare</span>
                        <span className="text-xs text-slate-500">(entrato)</span>
                    </div>
                    
                    {/* CENTER DOOR */}
                    <div className="w-24 h-32 border-4 border-amber-800 bg-amber-50 rounded-t-full relative">
                        <div className="absolute right-2 top-1/2 w-2 h-2 bg-amber-900 rounded-full"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <LogOut size={32} className="text-red-600 mb-1" />
                        <span className="font-bold text-slate-800">Uscire</span>
                        <span className="text-xs text-slate-500">(uscito)</span>
                    </div>
                </div>

                {/* STAIRS */}
                <div className="absolute bottom-4 right-32 flex flex-col items-center">
                     <ArrowDown size={32} className="text-indigo-600 mb-1" />
                     <span className="font-bold text-slate-800">Scendere</span>
                     <span className="text-xs text-slate-500">(sceso)</span>
                </div>
            </div>

            {/* BASEMENT / GROUND */}
            <div className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[520px] h-[100px] bg-emerald-50/50 border-t-4 border-emerald-200 z-0 flex justify-around items-center pt-4">
                 <div className="flex flex-col items-center">
                    <CloudRain size={24} className="text-blue-400 mb-1" />
                    <span className="font-bold text-slate-700">Cadere</span>
                    <span className="text-xs text-slate-500">(caduto)</span>
                </div>
                <div className="flex flex-col items-center">
                    <Skull size={24} className="text-slate-400 mb-1" />
                    <span className="font-bold text-slate-700">Morire</span>
                    <span className="text-xs text-slate-500">(morto)</span>
                </div>
            </div>

            {/* OUTSIDE ACTIONS */}
            <div className="absolute top-[280px] -left-16 flex flex-col gap-8">
                <div className="flex flex-col items-end">
                    <span className="font-bold text-slate-700">Arrivare</span>
                    <span className="text-xs text-slate-500">(arrivato)</span>
                    <ArrowRight size={24} className="text-slate-400" />
                </div>
                <div className="flex flex-col items-end">
                    <span className="font-bold text-slate-700">Venire</span>
                    <span className="text-xs text-slate-500">(venuto)</span>
                    <ArrowRight size={24} className="text-slate-400" />
                </div>
                 <div className="flex flex-col items-end">
                    <span className="font-bold text-slate-700">Tornare</span>
                    <span className="text-xs text-slate-500">(tornato)</span>
                    <ArrowRight size={24} className="text-slate-400" />
                </div>
            </div>

            <div className="absolute top-[280px] -right-16 flex flex-col gap-8">
                <div className="flex flex-col items-start">
                    <span className="font-bold text-slate-700">Partire</span>
                    <span className="text-xs text-slate-500">(partito)</span>
                    <ArrowLeft size={24} className="text-slate-400" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="font-bold text-slate-700">Andare</span>
                    <span className="text-xs text-slate-500">(andato)</span>
                    <ArrowLeft size={24} className="text-slate-400" />
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default CasaDiEssereChart;