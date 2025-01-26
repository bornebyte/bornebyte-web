const ShowInboxMessages = ({ data }) => {
    return (
        <div>
            {
                data && data.map((notification) => {
                    return <div key={notification.id} className="h-full w-full my-4">
                        <p className="text-sm">{notification.created_at}</p>
                        <p className="text-2xl">{notification.title}</p>
                    </div>
                })
            }
        </div>
    )
}

export default ShowInboxMessages