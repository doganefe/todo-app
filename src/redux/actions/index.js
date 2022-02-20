import modalActions from "./modalActions";
import todoActions from "./todoActions";

const actions = {
  ...todoActions,
  ...modalActions,
};

export default actions;
