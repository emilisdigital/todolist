import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "../EditableSpan";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditableSpan> = {
    title: 'TODOLISTS/EditableSpan',
    component: EditableSpan,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: {
            description: 'Start value empty sstring. Set start value'
        },
        onChange: {
            description: 'set new value'
        }
    },
    args: {
        onChange: action('Change value editable span'),
        value: 'HTML'
    }

};

export default meta;
type Story = StoryObj<typeof EditableSpan>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const EditableSpanStory: Story = {};

