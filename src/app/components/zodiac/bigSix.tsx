import SignCard from "./signCard";

export default function BigSix() {
  return (
    <div className="flex flex-col items-center gap-y-6 p-4">
      <div className="flex items-center gap-x-4">
        <SignCard type="Sun" sign="Leo"></SignCard>
        <SignCard type="Moon" sign="Gemini"></SignCard>
        <SignCard type="Rising" sign="Virgo"></SignCard>
      </div>
      <div className="flex items-center gap-x-4">
        <SignCard type="Venus" sign="Cancer"></SignCard>
        <SignCard type="Mercury" sign="Virgo"></SignCard>
        <SignCard type="Mars" sign="Sagittarius"></SignCard>
      </div>
    </div>
  );
}
