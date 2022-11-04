import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
	title: "shared/Modal",
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
	return <Modal {...args} isOpen={true} onClose={() => console.log} />;
};

export const Primary = Template.bind({});
Primary.args = {
	children: "Hello world",
};
