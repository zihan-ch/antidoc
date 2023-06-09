import { CombineProps, JSX, splitProps } from "solid"
import { ButtonRecipe, button, pointer, pointerWrapper, buttonBase } from "./index.css"

const Button = (
	props: CombineProps<
		JSX.ButtonHTMLAttributes<"button">,
		{
			type?: ButtonRecipe["type"]
			size?: ButtonRecipe["size"]
			round?: boolean
		}
	>,
) => {
	const [local, rest] = splitProps(props, ["type", "size", "round"])
	return (
		<button
			class={`${buttonBase} ${button({
				type: local.type,
				size: local.size,
				round: local.round,
			})}`}
			{...(rest as any)}
		>
			{rest.children}
		</button>
	)
}

export const PointButton = (props: { children: JSX.Element; onClick?: () => void }) => {
	return (
		<Button onClick={props.onClick}>
			{props.children}
			<div class={pointerWrapper}>
				<div class={pointer}></div>
			</div>
		</Button>
	)
}

export default Button
