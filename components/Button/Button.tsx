import { ButtonProps } from "./Button.props"
import s from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({appearance, arrow='none', children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(s.button, {
                [s.primary]: appearance == 'primary',
                [s.ghost]: appearance == 'ghost', 
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(s.arrow, {
                [s.down]: arrow == 'down'
            })}>
                <ArrowIcon />
                </span>}
        </button>
    )
}   