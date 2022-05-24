import { Meta, Story } from "@cw/storybook";
import { Button, ButtonProps } from "./Button";

export default {
	title: "Papyrus/Button",
	component: Button,
} as Meta;

export const Complete: Story<ButtonProps> = (args) => {
	return <Button {...args} />;
};

Complete.args = {
	label: "This is a label",
};
