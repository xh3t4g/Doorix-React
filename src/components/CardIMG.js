export const doors = Object.entries(
    import.meta.glob('../assets/images/*.jpeg', {eager: true})
).map(([_path, module]) => ({
    img: module.default
}))
