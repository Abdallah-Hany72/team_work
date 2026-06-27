export default function SpotPreviewCard({ spot }) {

    const image =
        spot.images?.[0]?.preview ||
        spot.images?.[0] ||
        "/placeholder.jpg";

    return (
        <div className="bg-white rounded-2xl border border-outline-variant overflow-hidden shadow-sm">

            <img
                src={image}
                alt={spot.name || "Spot Preview"}
                className="w-full h-52 object-cover"
            />

            <div className="p-5 space-y-3">

                <div className="flex flex-wrap gap-2">

                    {spot.vibes?.map((vibe) => (

                        <span
                            key={vibe}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs"
                        >
                            {vibe}
                        </span>

                    ))}

                </div>

                <h3 className="text-xl font-bold">

                    {spot.name || "Venue Name"}

                </h3>

                <p className="text-sm text-on-surface-variant">

                    {spot.address || "Address"}

                </p>

                <p className="text-sm line-clamp-3">

                    {spot.description ||
                        "Your description will appear here..."}

                </p>

            </div>

        </div>
    );
}