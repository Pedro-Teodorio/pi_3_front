import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import PropTypes from "prop-types";

export function DialogProfile({ children, title, description, setIsOpen, isOpen }) {
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="bg-zinc-100">
				<DialogHeader>
					<DialogTitle className="font-bold">{title}</DialogTitle>
					<DialogDescription className="font-semibold">{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	);
}

DialogProfile.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
};
