/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, Award, Sparkles, Lightbulb, CheckCircle2, 
  HelpCircle, ChevronRight, Bookmark, ArrowRight, RefreshCw, Eye, XCircle
} from "lucide-react";
import { ModuleData, StudentProgress } from "../types";
import InteractiveWidget from "./InteractiveWidget";

interface ModuleContainerProps {
  module: ModuleData;
  progress: StudentProgress;
  onUpdateProgress: (moduleId: string, quizScore: number) => void;
}

type TabType = "theory" | "simulator" | "quiz";

export default function ModuleContainer({ module, progress, onUpdateProgress }: ModuleContainerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("theory");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [simulationComplete, setSimulationComplete] = useState<boolean>(false);

  // Sync state on module switch
  useEffect(() => {
    setActiveTab("theory");
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setShowAnswers(false);
    
    // Check if simulation was already marked complete for this module
    setSimulationComplete(progress.completedModules.includes(module.id));
  }, [module.id, progress]);

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIdx
    });
  };

  const handleGradeQuiz = () => {
    let score = 0;
    module.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    setShowAnswers(true);

    // Save progress to App state & localStorage
    onUpdateProgress(module.id, score);
  };

  const handleSimulationComplete = () => {
    setSimulationComplete(true);
    // Auto-advance or save baseline completion
    onUpdateProgress(module.id, quizSubmitted ? quizScore : 0);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setShowAnswers(false);
  };

  const isCurrentModuleCompleted = progress.completedModules.includes(module.id);
  const savedScore = progress.quizScores[module.id] ?? null;

  return (
    <div className="bg-white border-2 border-zinc-900 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full" id="module_view_container">
      {/* Module Title / Emotional Hook header */}
      <div className="p-6 md:p-8 bg-zinc-900 text-white border-b-2 border-zinc-900 relative">
        <div className="absolute right-6 top-6 bg-zinc-800 p-3 rounded-xl border border-zinc-700 hidden sm:block">
          <span className="text-3xl font-sans select-none">{module.emoji}</span>
        </div>
        <div className="max-w-[85%] space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[9px] font-mono tracking-widest text-zinc-950 font-black uppercase bg-orange-400 px-2.5 py-1 rounded border border-zinc-900 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              MODULE CONCEPT PANEL
            </span>
            {isCurrentModuleCompleted && (
              <span className="text-[9px] font-mono tracking-widest text-zinc-950 font-black uppercase bg-emerald-400 px-2.5 py-1 rounded border border-zinc-900 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> VERIFIED COMPLETE
              </span>
            )}
          </div>
          <h2 className="font-sans font-black text-2xl md:text-3.5xl text-white tracking-tighter uppercase italic leading-none">
            {module.title}
          </h2>
          <p className="text-zinc-300 text-xs md:text-sm font-medium italic">
            &ldquo;{module.shortDescription}&rdquo;
          </p>
        </div>
      </div>

      {/* Tabs Navigation - Bento Styled Row */}
      <div className="flex bg-zinc-100 px-6 py-3 border-b-2 border-zinc-900 overflow-x-auto gap-2">
        <button
          id="tab_theory"
          onClick={() => setActiveTab("theory")}
          className={`py-2 px-4 font-sans font-black text-xs tracking-wider uppercase transition-all border-2 rounded-lg shrink-0 cursor-pointer ${
            activeTab === "theory" 
              ? "bg-white text-zinc-950 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
              : "border-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50"
          }`}
        >
          <div className="flex items-center gap-1.5 justify-center">
            <BookOpen className="h-4 w-4" /> 1. Theory Hub
          </div>
        </button>
        <button
          id="tab_simulator"
          onClick={() => setActiveTab("simulator")}
          className={`py-2 px-4 font-sans font-black text-xs tracking-wider uppercase transition-all border-2 rounded-lg shrink-0 cursor-pointer ${
            activeTab === "simulator" 
              ? "bg-white text-zinc-950 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
              : "border-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50"
          }`}
        >
          <div className="flex items-center gap-1.5 justify-center">
            <Sparkles className="h-4 w-4" /> 2. Sandbox Simulator
            {simulationComplete && <span className="w-2 h-2 rounded-full bg-emerald-500 border border-zinc-950"></span>}
          </div>
        </button>
        <button
          id="tab_quiz"
          onClick={() => setActiveTab("quiz")}
          className={`py-2 px-4 font-sans font-black text-xs tracking-wider uppercase transition-all border-2 rounded-lg shrink-0 cursor-pointer ${
            activeTab === "quiz" 
              ? "bg-white text-zinc-950 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
              : "border-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50"
          }`}
        >
          <div className="flex items-center gap-1.5 justify-center">
            <HelpCircle className="h-4 w-4" /> 3. Rethink Quiz
            {savedScore !== null && <span className="font-mono text-[9px] bg-indigo-100 border border-indigo-900 text-indigo-900 font-extrabold px-1 rounded ml-1">{savedScore}/{module.quiz.length}</span>}
          </div>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-280px)] scrollbar-thin bg-white text-zinc-900">
        <AnimatePresence mode="wait">
          {activeTab === "theory" && (
            <motion.div
              key="theory"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6"
            >
              {/* Senior Engineer context block */}
              <div className="p-4 bg-indigo-50 border-2 border-zinc-900 rounded-xl flex gap-3.5 items-start text-zinc-900">
                <div className="p-2 bg-indigo-200 border-2 border-zinc-900 rounded-lg text-indigo-900 shrink-0">
                  <Bookmark className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-indigo-800 font-black uppercase mb-1">
                    ★ 3RD-YEAR SYLLABUS DISSECTION
                  </h4>
                  <p className="text-xs text-zinc-700 leading-relaxed font-sans font-medium">
                    {module.academicContext}
                  </p>
                </div>
              </div>

              {/* Detailed Core Concepts */}
              <div className="space-y-5">
                {module.detailedContent.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="font-sans font-black text-sm uppercase text-gray-950 flex items-center gap-2 bg-zinc-100 border-2 border-zinc-900 p-2.5 rounded-lg">
                      <ChevronRight className="h-4 w-4 text-orange-500 shrink-0" /> {sec.sectionTitle}
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm text-zinc-600 leading-relaxed font-medium pl-2">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Relatable Examples & Analogies cards */}
              <div className="pt-4 border-t border-zinc-200">
                <h3 className="font-sans font-black text-xs text-zinc-500 font-mono tracking-wider uppercase mb-3 flex items-center gap-1.5 pl-1">
                  <Lightbulb className="h-4 w-4 text-orange-500" /> Relatable Analogies & Scenarios
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.relatableExamples.map((ex, exIdx) => (
                    <div key={exIdx} className="bg-white p-5 rounded-2xl border-2 border-zinc-900 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div>
                        <span className="font-sans font-black text-xs text-zinc-900 flex items-center gap-1.5 uppercase italic">
                          <span className="w-2.5 h-2.5 rounded-full bg-orange-400 border border-zinc-900 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></span> Scenario: {ex.title}
                        </span>
                        <p className="text-zinc-600 text-xs mt-2.5 leading-relaxed font-medium">
                          {ex.scenario}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-zinc-200 grid grid-cols-1 gap-3 text-[11px] font-sans bg-zinc-50 p-3 rounded-lg border border-zinc-900/60">
                        <div>
                          <span className="font-black text-rose-700 uppercase font-mono text-[9px] tracking-wider block">THE ANALOGY:</span>
                          <span className="text-zinc-600 leading-normal block mt-1 font-medium">{ex.analogy}</span>
                        </div>
                        <div>
                          <span className="font-black text-emerald-800 uppercase font-mono text-[9px] tracking-wider block">ENGINEER TAKEAWAY:</span>
                          <span className="text-zinc-650 leading-normal block mt-1 font-medium">{ex.takeaway}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready to Simulate Call-to-action bar */}
              <div className="p-4 bg-amber-50 border-2 border-zinc-900 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center sm:text-left">
                  <h4 className="font-sans font-black text-xs text-zinc-950 uppercase italic">Ready to play with this concept?</h4>
                  <p className="text-[11px] text-zinc-500 font-medium">Put your theoretical guidelines to work in our custom interactive simulator toolbox.</p>
                </div>
                <button
                  onClick={() => setActiveTab("simulator")}
                  className="px-4 py-2.5 bg-yellow-300 hover:bg-yellow-400 text-zinc-950 font-black rounded-lg text-xs transition flex items-center gap-1.5 shrink-0 border-2 border-zinc-900 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] uppercase"
                >
                  Launch Sandbox <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "simulator" && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              {/* Load game */}
              <InteractiveWidget 
                moduleId={module.id} 
                onComplete={handleSimulationComplete} 
              />

              {!simulationComplete && (
                <div className="p-3 bg-zinc-100 border-2 border-dashed border-zinc-400 rounded-xl text-zinc-600 text-xs text-center font-mono font-bold">
                  💡 Goal: Adjust sliders or configure metrics above to meet compliance standard and unlock checkmark.
                </div>
              )}

              {simulationComplete && (
                <div className="p-4 bg-emerald-50 border-2 border-zinc-900 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center sm:text-left flex items-start gap-2.5">
                    <div className="bg-emerald-400 text-zinc-950 border border-zinc-900 p-1 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] mt-0.5 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-black text-xs text-emerald-900 uppercase">Sandbox Completed Successfully!</h4>
                      <p className="text-[11px] text-zinc-650 font-medium">You successfully mapped parameters in real-time constraint environments.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab("quiz")}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-extrabold rounded-lg text-xs transition flex items-center gap-1 border-2 border-zinc-900 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] uppercase"
                  >
                    Take Topic Quiz <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6"
            >
              {/* Concept status banner */}
              <div className="p-4 bg-indigo-50 border-2 border-zinc-900 rounded-xl flex justify-between items-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 text-indigo-900 p-1.5 bg-indigo-200 border border-zinc-900 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] shrink-0 flex items-center justify-center">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-xs text-zinc-900 uppercase">Knowledge verification</h4>
                    <p className="text-[11px] text-zinc-650 font-medium">Solve 2 core multiple choice scenarios. Perfect score verifies module graduation!</p>
                  </div>
                </div>
                {quizSubmitted && (
                  <button
                    onClick={resetQuiz}
                    className="p-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <RefreshCw className="h-3.5 w-3.5" /> Reset Quiz
                  </button>
                )}
              </div>

              {/* Questions mapping */}
              <div className="space-y-5">
                {module.quiz.map((q, qIdx) => {
                  const currentSelected = selectedAnswers[q.id];
                  return (
                    <div key={q.id} className="bg-white p-5 rounded-2xl border-2 border-zinc-900 space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex gap-2.5 items-start">
                        <span className="font-mono text-xs bg-zinc-900 text-white p-1 px-2.5 border border-zinc-900 rounded-lg font-bold shrink-0 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                          Q{qIdx + 1}
                        </span>
                        <h4 className="font-sans font-black text-xs md:text-sm text-zinc-900 mt-0.5 leading-snug uppercase tracking-tight">
                          {q.question}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-2.5 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = currentSelected === optIdx;
                          const showCorrect = showAnswers && optIdx === q.correctAnswer;
                          const showWrong = showAnswers && isSelected && optIdx !== q.correctAnswer;

                          let btnStyle = "border-zinc-300 bg-white hover:bg-zinc-50 hover:border-zinc-900 text-zinc-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]";
                          if (isSelected) {
                            btnStyle = "border-zinc-900 bg-yellow-250 bg-yellow-200 text-zinc-950 font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]";
                          }
                          if (showAnswers) {
                            if (showCorrect) btnStyle = "border-zinc-900 bg-emerald-100 text-emerald-950 font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]";
                            if (showWrong) btnStyle = "border-zinc-900 bg-red-100 text-red-950 font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]";
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`w-full p-3.5 border-2 rounded-xl text-left text-xs transition duration-150 flex items-start gap-2.5 cursor-pointer outline-none ${btnStyle}`}
                            >
                              <span className="font-mono text-zinc-400 mt-0.5 shrink-0 font-bold">
                                {optIdx + 1}.
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Display explanation once submitted */}
                      {showAnswers && (
                        <div className="mt-3.5 p-3.5 bg-zinc-50 border-2 border-zinc-900 rounded-xl space-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <div className="flex items-center gap-1.5">
                            {currentSelected === q.correctAnswer ? (
                              <span className="text-[10px] font-mono text-emerald-800 font-black uppercase flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4" /> CORRECT EXPLANATION
                              </span>
                            ) : (
                              <span className="text-[10px] font-mono text-red-800 font-black uppercase flex items-center gap-1">
                                <XCircle className="h-4 w-4" /> VERIFIED SOLUTION
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-zinc-600 font-sans font-medium leading-normal pl-5">
                            {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit trigger */}
              {!quizSubmitted ? (
                <button
                  id="quiz_grade_btn"
                  disabled={Object.keys(selectedAnswers).length < module.quiz.length}
                  onClick={handleGradeQuiz}
                  className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-850 text-white font-black rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(251,191,36,1)] uppercase"
                >
                  Grade Answers and Archive Progress <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="bg-yellow-50 border-2 border-zinc-900 p-6 rounded-2xl text-center space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Award className="h-10 w-10 text-zinc-950 mx-auto bg-white border-2 border-zinc-900 p-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                  <h4 className="font-extrabold text-sm text-zinc-900 uppercase italic">
                    Grading Complete! Your score: <span className="font-mono text-base border-b-2 border-zinc-500 font-black px-1 text-indigo-800">{quizScore} / {module.quiz.length}</span>
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium max-w-sm mx-auto">
                    {quizScore === module.quiz.length 
                      ? "Flawless score! Standard guidelines have been successfully registered to your brain files!" 
                      : "Audit correct answers above, refactor your knowledge, and hit 'Reset Quiz' for a clean retry."}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Key Takeaways Footer strip */}
      <div className="p-4 bg-zinc-900 border-t-2 border-zinc-900 flex flex-wrap gap-2.5 items-center justify-center text-[10px] font-mono uppercase text-white select-none">
        <span className="font-black text-orange-400 flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> QUICK TIPS:</span>
        {module.keyTakeaways.map((takeaway, tIdx) => (
          <span key={tIdx} className="bg-zinc-800 border border-zinc-700 px-2.5 py-1 rounded text-zinc-300 font-bold">
            {takeaway}
          </span>
        ))}
      </div>
    </div>
  );
}
