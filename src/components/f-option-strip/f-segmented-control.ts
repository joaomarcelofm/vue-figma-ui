export interface FSegmentedControlItem {
  iconName?: string;
  label?: string;
  value: string;
}


export interface FSegmentedControlProps {
  modelValue: string;
  options: FSegmentedControlItem[];
  disabled?: boolean;
}
