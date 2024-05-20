import Routing from "./Route/Routing";
import { useBackdropStore } from "./store/useBackdropStore";
import { useSnackBarStore } from "./store/useSnackbarStore";
import BackdropLoading from "./Components/Backdrop";
import SnackBar from "./Components/SnackBar";

function App() {
	const [openBackdrop] = useBackdropStore((state) => [state.openBackdrop]);
	const [openSnackbar, message, type, handleCloseSnackbar] = useSnackBarStore(
		(state) => [
			state.openSnackbar,
			state.message,
			state.type,
			state.handleCloseSnackbar,
		]
	);
	return (
		<div>
			<Routing />
			<BackdropLoading open={openBackdrop} />
			<SnackBar
				open={openSnackbar}
				message={message}
				type={type}
				onClose={handleCloseSnackbar}
			/>
		</div>
	);
}

export default App;
