import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";

interface StoryDisplayProps {
  story: string;
  isGenerating: boolean;
}

const StoryDisplay = ({ story, isGenerating }: StoryDisplayProps) => {
  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground font-body text-lg">
          Weaving your magical story...
        </p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex items-center justify-center h-[400px] text-muted-foreground font-body text-lg text-center px-8">
        Your story will appear here once generated
      </div>
    );
  }

  return (
    <ScrollArea className="h-[400px] rounded-lg border border-border/50 bg-card/30 p-6">
      <div className="prose prose-invert max-w-none">
        <p className="font-body text-lg leading-relaxed whitespace-pre-wrap text-foreground">
          {story}
        </p>
      </div>
    </ScrollArea>
  );
};

export default StoryDisplay;
