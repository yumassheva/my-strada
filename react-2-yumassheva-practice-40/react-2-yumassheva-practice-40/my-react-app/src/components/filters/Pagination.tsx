import {Button} from "@mui/material";
import {
  next,
  next2,
  before,
  before2,
  nextNumberPage,
  beforeNumberPage,
} from "../../store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import {
  firstNumberOfPages,
  lastNumberOfPages,
  buttonNameNext,
  buttonNameBefore,
} from "/src/js/constant.js";

function Pagination() {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.reducerNav.start);
  const finish = useSelector((state) => state.reducerNav.finish);
  const page = useSelector((state) => state.reducerNav.page);

  function nextPage() {
    dispatch(next(start));
    dispatch(next2(finish));
    dispatch(nextNumberPage(page));
  }
  function beforePage() {
    dispatch(before(start));
    dispatch(before2(finish));
    dispatch(beforeNumberPage(page));
  }
  if (page === firstNumberOfPages) {
    return (
      <div className="">
        <Button onClick={nextPage} variant="contained">
          {buttonNameNext}
        </Button>
        <p>
          {page} of {lastNumberOfPages}
        </p>
      </div>
    );
  }
  if (page === lastNumberOfPages) {
    return (
      <div className="">
        <Button onClick={beforePage} variant="contained">
          {buttonNameBefore}
        </Button>
        <p>
          {page} of {lastNumberOfPages}
        </p>
      </div>
    );
  }
  return (
    <div>
      <Button onClick={beforePage} variant="contained">
        {buttonNameBefore}
      </Button>
      <Button onClick={nextPage} variant="contained">
        {buttonNameNext}
      </Button>
      <p>
        {page} of {lastNumberOfPages}
      </p>
    </div>
  );
}

export default Pagination;
