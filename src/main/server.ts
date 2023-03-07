const PORT = 3333

const bootstrap = async (): Promise<void> => {
    const app = (await import('./config/app')).default
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
}

bootstrap()