import PropTypes from "prop-types";
import * as Icons from 'lucide-react'


export const InputIcon = ({name}) =>{
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent className="text-neutral-400" /> : null;
}
InputIcon.propTypes = {
	name: PropTypes.string.isRequired,
};