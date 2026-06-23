/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  GraduationCap, CheckSquare, Layers, Compass, Trash2, 
  HelpCircle, Info, RotateCcw, Menu, X, ArrowRight, Star
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { modulesData } from "./data/modulesData";
import ModuleContainer from "./components/ModuleContainer";
import { StudentProgress } from "./types";

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState<string>("importance");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Initialize progress state from localStorage or defaults
  const [progress, setProgress] = useState<StudentProgress>(() => {
    const saved = localStorage.getItem("se_module_progress");
    if (saved) {
      try {
        return JSON.parse(saved) as StudentProgress;
      } catch (e) {
        // Fallback
      }
    }
    return {
      completedModules: [],
      quizScores: {}
    };
  });

  // Persist progress changes
  useEffect(() => {
    localStorage.setItem("se_module_progress", JSON.stringify(progress));
  }, [progress]);

  const handleUpdateProgress = (moduleId: string, quizScore: number) => {
    setProgress((prev) => {
      const completed = [...prev.completedModules];
      if (!completed.includes(moduleId)) {
        completed.push(moduleId);
      }

      const scores = { ...prev.quizScores } as Record<string, number>;
      // Save higher score if retaking
      const existingScore = scores[moduleId] ?? -1;
      if (quizScore > existingScore) {
        scores[moduleId] = quizScore;
      }

      return {
        completedModules: completed,
        quizScores: scores
      };
    });
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your study progress, simulation grades, and quiz scores?")) {
      const emptyProgress = { completedModules: [], quizScores: {} };
      setProgress(emptyProgress);
      localStorage.setItem("se_module_progress", JSON.stringify(emptyProgress));
      setActiveModuleId("importance");
    }
  };

  const activeModule = modulesData.find((m) => m.id === activeModuleId) || modulesData[0];

  // Calculate statistics
  const totalCompleted = progress.completedModules.length;
  const progressPercent = Math.round((totalCompleted / modulesData.length) * 100);
  
  // Calculate average quiz score
  const quizScoresList = Object.values(progress.quizScores) as number[];
  const totalQuizzesPassed = quizScoresList.filter(score => score > 0).length;
  const averageAccuracy = quizScoresList.length > 0 
    ? Math.round((quizScoresList.reduce((sum, score) => sum + score, 0) / (quizScoresList.length * 2)) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 flex flex-col antialiased p-4 md:p-6 lg:p-8 gap-5">
      {/* Top Navigation Frame Header - Bento Block */}
      <header className="bg-white border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-5 rounded-2xl flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-indigo-600" /> University Engineering • Interactive Companion
          </span>
          <h1 className="text-2xl md:text-3.5xl font-black tracking-tighter text-zinc-900 uppercase italic flex items-center gap-2">
            SOFTWARE ENGINEERING CORE CONCEPT ENGINE
          </h1>
          <p className="text-xs font-medium text-zinc-500">Interactive Digital Companion & Lab Sandbox // Academic Module 1</p>
        </div>

        {/* Global Progress Indicators - Bento Badges */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="bg-emerald-50 border-2 border-zinc-900 p-3 rounded-xl flex items-center gap-3">
            <div className="text-left">
              <span className="text-[9px] font-black font-mono text-emerald-800 tracking-wider uppercase block">COURSE PROGRESS</span>
              <span className="text-xs font-bold font-mono text-zinc-900 block mt-0.5">{totalCompleted} / {modulesData.length} Topics Verified</span>
            </div>
            <div className="w-20 bg-zinc-200 h-2 rounded-full border border-zinc-900 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>

          <div className="bg-indigo-50 border-2 border-zinc-900 p-3 rounded-xl">
            <span className="text-[9px] font-black font-mono text-indigo-800 tracking-wider uppercase block">QUIZ EVAL ACCURACY</span>
            <span className="text-xs font-extrabold font-mono text-zinc-900 block mt-0.5">{averageAccuracy}% Correct</span>
          </div>

          <button 
            id="reset_progress_btn"
            onClick={handleResetProgress}
            className="p-3 bg-red-100 border-2 border-zinc-900 rounded-xl hover:bg-red-200 transition text-zinc-900 hover:text-red-700 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            title="Reset All Progress"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden gap-3 self-end md:self-auto">
          <button 
            onClick={handleResetProgress}
            className="p-2 py-1 px-3 border-2 border-zinc-900 rounded-lg bg-red-100 text-xs font-mono font-bold text-zinc-900 hover:bg-red-200 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Reset
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-zinc-900 rounded-lg bg-white cursor-pointer text-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Main Structural Grid */}
      <div className="flex-1 flex overflow-hidden gap-5">
        {/* Navigation Sidebar Drawer - Left column */}
        <aside className="w-80 p-4 shrink-0 flex flex-col justify-between hidden lg:flex bg-white border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
          <div className="space-y-4">
            <div className="text-xs font-black tracking-widest uppercase text-zinc-500 mb-1 font-mono">
              ★ MODULES TIMELINE ({modulesData.length})
            </div>
            
            <nav className="space-y-2.5 max-h-[calc(100vh-290px)] overflow-y-auto scrollbar-thin pr-1">
              {modulesData.map((m) => {
                const isActive = m.id === activeModuleId;
                const isCompleted = progress.completedModules.includes(m.id);
                return (
                  <button
                    key={m.id}
                    id={`side_nav_${m.id}`}
                    onClick={() => setActiveModuleId(m.id)}
                    className={`w-full p-3 rounded-xl border-2 text-left transition duration-150 cursor-pointer flex items-start gap-3 group relative ${
                      isActive 
                        ? "border-zinc-900 bg-yellow-300 text-zinc-950 font-extrabold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]" 
                        : "border-zinc-900 bg-white text-zinc-700 hover:border-zinc-900 hover:text-zinc-950 hover:bg-zinc-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                    }`}
                  >
                    <span className="text-lg shrink-0 select-none">{m.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-sans font-black text-xs select-none uppercase tracking-tight">{m.title}</div>
                      <p className="text-[10px] text-zinc-500 mt-1 select-none font-medium truncate">{m.shortDescription}</p>
                    </div>
                    {isCompleted && (
                      <span className="w-3.5 h-3.5 bg-emerald-500 border border-zinc-900 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        <span className="block w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Student Profile Info Card */}
          <div className="bg-indigo-50 p-4 border-2 border-zinc-900 rounded-2xl flex flex-col gap-3 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute -right-3 -bottom-3 bg-indigo-500/10 p-4 rounded-full">
              <Compass className="h-10 w-10 text-indigo-900/10" />
            </div>
            <div>
              <span className="text-[9px] font-mono tracking-widest text-indigo-700 font-black block uppercase">STUDENT PROFILE</span>
              <span className="font-sans font-black text-xs text-zinc-900 block mt-0.5 uppercase italic">SOFTWARE ARCHITECT STUDENT</span>
              <span className="text-[10px] text-zinc-650 font-bold block mt-1">ACEM ACADEMIC YEAR 3</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-900 bg-white border border-zinc-900 p-2 rounded-xl">
              <div>
                <span className="block text-zinc-500 font-bold uppercase tracking-widest text-[8px]">COMPLETED</span>
                <span className="text-zinc-900 font-extrabold">{totalCompleted} / 8</span>
              </div>
              <div>
                <span className="block text-zinc-500 font-bold uppercase tracking-widest text-[8px]">ACCURACY</span>
                <span className="text-zinc-900 font-extrabold">{averageAccuracy}%</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Dropdown drawer overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ x: -280, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -280, opacity: 0 }}
              transition={{ type: "tween", duration: 0.15 }}
              className="fixed inset-y-0 left-0 bg-white z-50 p-6 border-r-2 border-zinc-900 w-80 md:w-96 flex flex-col justify-between shadow-[6px_0px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b-2 border-zinc-900">
                  <span className="text-xs font-black tracking-widest uppercase text-zinc-500 font-mono">TOPICS TIMELINE ({modulesData.length})</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-1 border-2 border-zinc-900 rounded bg-zinc-900 text-white"><X className="h-4 w-4" /></button>
                </div>
                <nav className="space-y-2.5 overflow-y-auto max-h-[calc(100vh-270px)] scrollbar-thin pr-1">
                  {modulesData.map((m) => {
                    const isActive = m.id === activeModuleId;
                    const isCompleted = progress.completedModules.includes(m.id);
                    return (
                      <button
                        key={m.id}
                        onClick={() => {
                          setActiveModuleId(m.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full p-3 rounded-xl border-2 text-left flex items-start gap-3 transition ${
                          isActive 
                            ? "border-zinc-900 bg-yellow-300 text-zinc-950 font-extrabold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                            : "border-zinc-900 bg-white text-zinc-700"
                        }`}
                      >
                        <span className="text-base shrink-0">{m.emoji}</span>
                        <div>
                          <div className="font-sans font-black text-xs uppercase">{m.title}</div>
                          <p className="text-[10px] text-zinc-500 mt-0.5 truncate">{m.shortDescription}</p>
                        </div>
                        {isCompleted && (
                          <span className="ml-auto w-2 h-2 bg-emerald-500 border border-zinc-900 rounded-full"></span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Progress footer inside drawer */}
              <div className="border-t-2 border-zinc-900 pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-950 bg-indigo-50 border-2 border-zinc-900 p-3 rounded-xl">
                  <div>
                    <span className="block text-zinc-500 text-[9px] font-bold">COMPLETED</span>
                    <span className="text-zinc-900 font-extrabold">{totalCompleted} / 8</span>
                  </div>
                  <div>
                    <span className="block text-zinc-500 text-[9px] font-bold">QUIZ ACCURACY</span>
                    <span className="text-zinc-950 font-extrabold">{averageAccuracy}%</span>
                  </div>
                </div>
                <div className="p-3 bg-zinc-900 text-white border-2 border-zinc-900 rounded-xl text-xs font-medium">
                  📚 Preparing core rationale & design.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right main column with theory and game displays */}
        <main className="flex-1 flex flex-col h-full overflow-hidden">
          <ModuleContainer 
            module={activeModule}
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        </main>
      </div>
    </div>
  );
}

