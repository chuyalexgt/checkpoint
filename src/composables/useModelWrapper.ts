const useModelWrapper = (props: any, emit: any, name = 'modelValue') => {
  return computed({
    get: () => props[name],
    set: value => emit(`update:${name}`, value),
  })
}

export { useModelWrapper }
