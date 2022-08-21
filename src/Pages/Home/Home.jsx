import { useEffect } from "react";
import { fetchList, mutualDummy } from "../../Network";
import { useNavigate } from "react-router-dom";
import { useStateValue, addToList, addToCart } from "../../Store";
function Home() {
  let [listState, dispatch] = useStateValue();
  const { mutualFundList } = listState;
  let navigate = useNavigate();
  useEffect(() => {
    if (mutualFundList.length !== 0) return;
    (async () => {
      let data;
      try {
        data = await fetchList();
      } catch (error) {
        data = mutualDummy.map((fund) => ({
          id: fund?.id ?? "",
          name: fund?.name ?? "",
          classification: fund?.classification ?? "",
          category: fund?.category ?? "",
          riskmeter: fund?.riskmeter ?? "",
          maximumPurchaseAmount: fund?.maximumPurchaseAmount ?? 0,
          minimumPurchaseAmount: fund?.minimumPurchaseAmount ?? 0,
        }));
      }
      dispatch(addToList(data));
    })();
  }, []);

  const navigateToCartPage = (data) => {
    dispatch(addToCart(data));
    navigate("/cart");
  };
  return (
    <div className="Home">
      {mutualFundList && mutualFundList.length === 0 && (
        <h2 className="Home__loading">Loading</h2>
      )}
      {mutualFundList && mutualFundList.length !== 0 && (
        <div className="Home__mututalfund__list">
          {mutualFundList.map((fund) => (
            <div className="list__container" key={fund.id}>
              <div className="container__section1">
                <h3>{fund.name}</h3>
                <ul>
                  <li>{fund.classification}</li>
                  <li>{fund.category}</li>
                  <li>{fund.riskmeter}</li>
                </ul>
              </div>
              <button
                className="list__button"
                onClick={() => navigateToCartPage(fund)}
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
