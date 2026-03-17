interface Props {
  chipLabel: string;
  exampleLabel: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImg: string;
  afterImg: string;
  poster: string;
  video: string;
}

export default function ExampleComparisonBlock({
  chipLabel,
  exampleLabel,
  beforeLabel,
  afterLabel,
  beforeImg,
  afterImg,
  video,
  poster,
}: Props) {
  return (
    <div className="bg-card border border-border rounded-lg p-5 card-glow">
      {/* Chip */}
      <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-md border border-primary/20 mb-4">
        {chipLabel}
      </span>
      <p className="text-text-secondary text-sm mb-4 font-medium">{exampleLabel}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Before */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-md overflow-hidden bg-secondary">
            <img
              src={beforeImg}
              alt={beforeLabel}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </div>
          <span className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm text-foreground text-xs px-2 py-0.5 rounded">
            {beforeLabel}
          </span>
        </div>

        {/* After */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-md overflow-hidden bg-secondary">
            <img
              src={afterImg}
              alt={afterLabel}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </div>
          <span className="absolute top-2 left-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs px-2 py-0.5 rounded">
            {afterLabel}
          </span>
        </div>

        {/* Video */}
        <div className="aspect-[4/3] rounded-md overflow-hidden bg-secondary">
          <video
            poster={poster}
            controls
            preload="none"
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
