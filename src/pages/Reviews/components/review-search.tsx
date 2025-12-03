import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Text } from "@/components/ui/text";

interface ReviewSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ReviewSearch({ value, onChange }: ReviewSearchProps) {

    return (
        <div className="bg-[#2D2220] border border-[#533629] rounded-xl p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <Text
                    className="flex-1 min-w-[220px] text-left"
                    title="Search reviews"
                    titleSize="sm"
                    description1="Find feedback by product title"
                />
            </div>

            <InputGroup className="bg-[#1a1410] border-[#533629] focus-within:border-[#F8E4BF]/80">
                <InputGroupAddon className="text-[#F8E4BF]">
                    <Search className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder="Search by product title"
                    className="text-white placeholder:text-[#9A816E]"
                />

            </InputGroup>
        </div>
    );
}
