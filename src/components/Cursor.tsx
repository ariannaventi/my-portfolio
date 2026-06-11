'use client'
import { useEffect } from 'react'

const cursorStyle = '@media(hover:none){#cur,#cur-ring{display:none;}}'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const ring = document.getElementById('cur-ring')
    if (!cur || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'
      cur.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)
    let rafId: number
    const anim = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(anim)
    }
    rafId = requestAnimationFrame(anim)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <style>{cursorStyle}</style>
      <div id="cur" style={{width:7,height:7,background:'var(--accent)',borderRadius:'50%',position:'fixed',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)'}}/>
      <div id="cur-ring" style={{width:32,height:32,border:'1px solid color-mix(in srgb,var(--accent) 30%,transparent)',borderRadius:'50%',position:'fixed',pointerEvents:'none',zIndex:9998,transform:'translate(-50%,-50%)'}}/>
    </>
  )
}
