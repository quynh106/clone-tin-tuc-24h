import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authSlice";
import { toggleSave } from "../store/savedSlice";
import { openAuth, showNotice } from "../store/uiSlice";

export function useSaveArticle(article) {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const saved = useSelector((s) =>
    user
      ? (s.saved.byUser[user.email] ?? []).some((a) => a.id === article.id)
      : false,
  );

  const toggle = () => {
    if (!user) return dispatch(openAuth("login"));
    dispatch(toggleSave({ email: user.email, article }));
    dispatch(
      showNotice(
        saved
          ? { title: "Bỏ lưu bài viết thành công" }
          : {
              title: "Lưu bài viết thành công",
              message: "Bạn có thể xem lại bài viết đã lưu ở trang",
              linkText: "Tin bài đã lưu",
              linkTo: "/tin-bai-da-luu.html",
            },
      ),
    );
  };

  return { saved, toggle };
}
