import './widgets.scss'

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widget">
        <div className="title">
          Tenants
        </div>
        <div className="bottom">
          <div className="numbers">
            10
          </div>
          <div className="comp">
            <div className="pos">
              +6
            </div>
          </div>
        </div>
      </div>
      <div className="widget">
        <div className="title">
          Rent Received
        </div>
        <div className="bottom">
          <div className="numbers">
            10000
          </div>
          <div className="comp">
            <div className="pos">
              +600
            </div>
          </div>
        </div>
      </div>
      <div className="widget">
        <div className="title">
          Properties
        </div>
        <div className="bottom">
          <div className="numbers">
            1
          </div>
          <div className="comp">
            <div className="neg">
              -1
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widgets