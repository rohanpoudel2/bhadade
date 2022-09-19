import './rentreceivedcard.scss'

const RentReceivedCard = ({ status }) => {
  return (
    <div className='rentreceivedcard'>
      <div className="left">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-22788d5fe20ce873fbd5564b08d77a43-lq"
          alt="tenantIMG"
        />
        <div className="name">
          <span>Ram Duwadi</span>
          <span className={status}>{status}</span>
        </div>
      </div>
      <div className="right">
        <span>$100</span>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default RentReceivedCard