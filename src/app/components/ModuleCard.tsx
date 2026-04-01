import { CheckCircle2, LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  completed: boolean;
  onClick: () => void;
}

export function ModuleCard({
  title,
  description,
  icon: Icon,
  color,
  completed,
  onClick,
}: ModuleCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative bg-white border border-gray-200 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-transparent group"
    >
      {completed && (
        <div className="absolute top-4 right-4">
          <CheckCircle2 className="w-6 h-6 text-green-500" />
        </div>
      )}

      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

      <div className="mt-4 inline-flex items-center text-sm text-blue-600 group-hover:gap-2 transition-all">
        Começar módulo
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </button>
  );
}
