export function useFeed(feed) {
  const [state, setState] = useState({
    status: "loading",
    data: [],
    error: null,
  });
  useEffect(() => {
    let ignore = false;
    setState({ status: "loading", data: [], error: null });
    fetchFeed(feed)
      .then(
        (data) => !ignore && setState({ status: "success", data, error: null }),
      )
      .catch(
        (error) => !ignore && setState({ status: "error", data: [], error }),
      );
    return () => {
      ignore = true;
    }; // tránh set state khi đã chuyển trang
  }, [feed]);
  return state;
}
