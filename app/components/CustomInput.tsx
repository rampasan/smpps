"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface CustomInputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const CustomInput: React.FC<CustomInputProps> = ({
	id,
	label,
	register,
	disabled,
	errors,
	required,
	type = "text",
}) => {
	return (
		<div className="w-full relative">
			<input
				type={type}
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				className={`peer w-full p-4 pt-6 font-light pl-4 bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
					errors[id] ? "border-rose-500" : "border-neutral-300"
				} ${
					errors[id] ? "focus:border-rose-500" : "focus:border-black"
				}`}
			/>
			<label
				className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]  peer-placeholder-shown:scale-100 left-4 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
					errors[id] ? "text-rose-500" : "text-zinc-400"
				}`}
			>
				{label}
			</label>
		</div>
	);
};

export default CustomInput;
