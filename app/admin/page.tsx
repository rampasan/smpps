import AdminSearch from "../components/AdminSearch";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../helpers/getCurrentUser";

interface AdminPageProps {}

const AdminPage = async ({}: AdminPageProps) => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return (
			<EmptyState
				title="You have to be logged in as administrator to view this page"
				subtitle="Please log in"
				showHome
			/>
		);
	}

	if (currentUser.role === "USER") {
		return (
			<EmptyState
				title="You have to be an administrator to view this page"
				subtitle="Please contact support for assistance if needed"
				showHome
			/>
		);
	}
	return (
		<div className="my-2">
			<AdminSearch />
		</div>
	);
};

export default AdminPage;
