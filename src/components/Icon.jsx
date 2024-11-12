import PropTypes from "prop-types";
import * as Icons from 'lucide-react';

export const Icon = ({ name, className, ...props }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent {...props} className={className} /> : null;
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    // Adicione outras propriedades de botão conforme necessário
};