import EmblaCarousel from "./EmblaCarousel"


export default function Main() {
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  )
}