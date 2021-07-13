import lsManager from "../utills/lsManager";

const DEFAULT_UPDATE_EVENT_NAME = "input";
const DEFAULT_DEBOUNCE_TIME = 0;

function bind(el, binding, vnode) {
  const cacheStore = lsManager.getCacheStore();
  let timerId = -1;
  const updateEventName =
    (binding.value && binding.value.updateEvent) || DEFAULT_UPDATE_EVENT_NAME;
  const debounce = binding.value.debounce || DEFAULT_DEBOUNCE_TIME;
  if (
    cacheStore &&
    cacheStore[binding.value.id] &&
    cacheStore[binding.value.id].value
  ) {
    vnode.componentInstance.$emit(
      updateEventName,
      cacheStore[binding.value.id].value
    );
  }
  vnode.componentInstance.$on(updateEventName, (event) => {
    if (debounce) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        lsManager.updateCache({
          [binding.value.id]: {
            value: event
          }
        });
        timerId = -1;
      }, debounce);
    } else {
      lsManager.updateCache({
        [binding.value.id]: {
          value: event
        }
      });
    }
  });
}

function unbind(el, binding, vnode) {
  lsManager.updateCache({
    [binding.value.id]: {
      value: vnode.componentInstance.value
    }
  });
}

export default {
  install(vue) {
    vue.directive("cache", {
      bind,
      unbind
    });
  }
};
