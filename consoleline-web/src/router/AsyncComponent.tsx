import { Suspense } from 'react'

const Loading = () => <div>Loading</div>

export default (LazyComponenet: unknown) => {
    return (
        <Suspense fallback={<Loading/>}>
            <LazyComponenet></LazyComponenet>
        </Suspense>
    )
}
