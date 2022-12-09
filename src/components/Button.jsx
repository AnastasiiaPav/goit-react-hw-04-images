import propTypes from 'prop-types';
import { func } from 'prop-types';

import { AllButton } from "./App.styled"

 export const Button = ({onclick}) => {
    return(
        <AllButton type='button' onClick={onclick}>
         Show more
        </AllButton>
    )
 }

Button.propTypes = {
    onClick: func,
}