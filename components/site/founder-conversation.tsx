type FounderConversationProps = {
  src?: string;
  captionsSrc?: string;
  poster?: string;
  title: string;
  transcript?: string;
};

export function FounderConversation({
  src,
  captionsSrc,
  poster,
  title,
  transcript,
}: FounderConversationProps) {
  if (!src || !captionsSrc) return null;

  return (
    <figure className="ea-founder-conversation">
      <video controls preload="metadata" poster={poster} aria-label={title}>
        <source src={src} />
        <track
          kind="captions"
          src={captionsSrc}
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support embedded video.
      </video>
      <figcaption>
        <h3>{title}</h3>
        {transcript ? <p>{transcript}</p> : null}
      </figcaption>
    </figure>
  );
}
