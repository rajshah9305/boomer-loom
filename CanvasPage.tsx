import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Brush, 
  Eraser, 
  Palette, 
  Download, 
  RotateCcw,
  Circle,
  Square,
  Triangle
} from 'lucide-react'

const CanvasPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [brushSize, setBrushSize] = useState([5])
  const [currentTool, setCurrentTool] = useState<'brush' | 'eraser' | 'circle' | 'square'>('brush')
  const [currentColor, setCurrentColor] = useState('#3b82f6')

  const colors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
    '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16',
    '#000000', '#ffffff', '#6b7280', '#f97316'
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Set initial canvas background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Set drawing properties
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    draw(e)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.lineWidth = brushSize[0]
    
    if (currentTool === 'brush') {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = currentColor
    } else if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out'
    }

    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const stopDrawing = () => {
    if (!isDrawing) return
    setIsDrawing(false)
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const downloadCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'canvas-artwork.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  const drawShape = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.strokeStyle = currentColor
    ctx.lineWidth = brushSize[0]
    
    const size = 50

    if (currentTool === 'circle') {
      ctx.beginPath()
      ctx.arc(x, y, size / 2, 0, 2 * Math.PI)
      ctx.stroke()
    } else if (currentTool === 'square') {
      ctx.strokeRect(x - size / 2, y - size / 2, size, size)
    }
  }

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (currentTool === 'circle' || currentTool === 'square') {
      drawShape(e)
    } else {
      startDrawing(e)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Canvas Editor
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={clearCanvas}
                className="hover:bg-red-50 hover:text-red-600"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadCanvas}
                className="hover:bg-green-50 hover:text-green-600"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tools Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Drawing Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Brush className="w-5 h-5 mr-2" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={currentTool === 'brush' ? 'default' : 'outline'}
                    onClick={() => setCurrentTool('brush')}
                    className="h-12"
                  >
                    <Brush className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={currentTool === 'eraser' ? 'default' : 'outline'}
                    onClick={() => setCurrentTool('eraser')}
                    className="h-12"
                  >
                    <Eraser className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={currentTool === 'circle' ? 'default' : 'outline'}
                    onClick={() => setCurrentTool('circle')}
                    className="h-12"
                  >
                    <Circle className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={currentTool === 'square' ? 'default' : 'outline'}
                    onClick={() => setCurrentTool('square')}
                    className="h-12"
                  >
                    <Square className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Brush Size */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Brush Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={brushSize}
                    onValueChange={setBrushSize}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-center">
                    <Badge variant="secondary">{brushSize[0]}px</Badge>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className="rounded-full bg-current"
                      style={{
                        width: `${Math.max(brushSize[0], 8)}px`,
                        height: `${Math.max(brushSize[0], 8)}px`,
                        color: currentColor
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Color Palette */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Colors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setCurrentColor(color)}
                      className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${
                        currentColor === color ? 'border-gray-800 dark:border-white' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Custom Color</label>
                  <input
                    type="color"
                    value={currentColor}
                    onChange={(e) => setCurrentColor(e.target.value)}
                    className="w-full h-10 border rounded-md cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardContent className="p-0">
                <div className="canvas-container aspect-video bg-white rounded-lg overflow-hidden border">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full cursor-crosshair"
                    onMouseDown={handleCanvasClick}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    style={{
                      cursor: currentTool === 'eraser' ? 'grab' : 
                             currentTool === 'brush' ? 'crosshair' : 'pointer'
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CanvasPage
