import { useRouter } from "next/navigation";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface IUseFollow {
	stockId: string;
	currentUser?: SafeUser | null;
}

const useFollow = ({ stockId, currentUser }: IUseFollow) => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const hasFollowed = useMemo(() => {
		const list = currentUser?.followedStocks || [];
		return list.includes(stockId);
	}, [currentUser, stockId]);

	const toggleFollow = useCallback(
		async (e: React.MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();

			if (!currentUser) {
				return loginModal.onOpen();
			}

			try {
				let request;

				if (hasFollowed) {
					request = () => axios.delete(`/api/follow/${stockId}`);
				} else {
					request = () => axios.post(`/api/follow/${stockId}`);
				}

				await request();
				router.refresh();
				toast.success("Success");
			} catch (error) {
				toast.error("Something went wrong");
			}
		},
		[currentUser, hasFollowed, loginModal, router, stockId]
	);

	return { hasFollowed, toggleFollow };
};

export default useFollow;
